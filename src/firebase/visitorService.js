import {
    collection,
    addDoc,
    getDocs,
    query,
    where,
    orderBy,
    deleteDoc,
    doc,
    updateDoc,
    serverTimestamp
} from 'firebase/firestore';
import { db } from './config';

const VISITORS_COLLECTION = 'visitors';

// Add a new visitor or update existing visitor
export const saveVisitor = async (visitorData) => {
    try {
        // Prefer persistent visitorId if available; fallback to fingerprint
        const identifierField = visitorData.visitorId ? 'visitorId' : 'fingerprint';
        const identifierValue = visitorData.visitorId || visitorData.fingerprint;

        // Check if visitor already exists by identifier
        const existingVisitorQuery = query(
            collection(db, VISITORS_COLLECTION),
            where(identifierField, '==', identifierValue)
        );

        const existingVisitors = await getDocs(existingVisitorQuery);

        if (!existingVisitors.empty) {
            // Update existing visitor
            const visitorDoc = existingVisitors.docs[0];
            const existingData = visitorDoc.data();

            // Filter out undefined values that Firestore doesn't support
            const cleanVisitorData = Object.fromEntries(
                Object.entries(visitorData).filter(([_, value]) => value !== undefined)
            );

            const updatedData = {
                ...existingData,
                visitCount: (existingData.visitCount || 0) + 1,
                lastVisit: visitorData.timestamp,
                visits: [
                    ...(existingData.visits || []),
                    {
                        timestamp: visitorData.timestamp,
                        url: visitorData.url,
                        referrer: visitorData.referrer
                    }
                ],
                // Update device info if it has changed
                ...cleanVisitorData
            };

            await updateDoc(doc(db, VISITORS_COLLECTION, visitorDoc.id), updatedData);
            return { success: true, visitorId: visitorDoc.id, isNew: false };
        } else {
            // Filter out undefined values that Firestore doesn't support
            const cleanVisitorData = Object.fromEntries(
                Object.entries(visitorData).filter(([_, value]) => value !== undefined)
            );

            // Add new visitor
            const newVisitorData = {
                ...cleanVisitorData,
                visitCount: 1,
                firstVisit: visitorData.timestamp,
                lastVisit: visitorData.timestamp,
                visits: [{
                    timestamp: visitorData.timestamp,
                    url: visitorData.url,
                    referrer: visitorData.referrer
                }],
                createdAt: serverTimestamp()
            };

            const docRef = await addDoc(collection(db, VISITORS_COLLECTION), newVisitorData);
            return { success: true, visitorId: docRef.id, isNew: true };
        }
    } catch (error) {
        if (error?.code !== 'permission-denied') {
            console.error('Error saving visitor:', error);
        }
        return { success: false, error: error.message };
    }
};

// Get all visitors
export const getVisitors = async () => {
    try {
        const visitorsQuery = query(
            collection(db, VISITORS_COLLECTION),
            orderBy('lastVisit', 'desc')
        );

        const querySnapshot = await getDocs(visitorsQuery);
        const visitors = [];

        querySnapshot.forEach((doc) => {
            visitors.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return { success: true, visitors };
    } catch (error) {
        console.error('Error getting visitors:', error);
        return { success: false, error: error.message, visitors: [] };
    }
};

// Delete all visitors
export const clearAllVisitors = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, VISITORS_COLLECTION));

        const deletePromises = querySnapshot.docs.map(doc =>
            deleteDoc(doc.ref)
        );

        await Promise.all(deletePromises);
        return { success: true };
    } catch (error) {
        console.error('Error clearing visitors:', error);
        return { success: false, error: error.message };
    }
};

// Delete a specific visitor
export const deleteVisitor = async (visitorId) => {
    try {
        await deleteDoc(doc(db, VISITORS_COLLECTION, visitorId));
        return { success: true };
    } catch (error) {
        console.error('Error deleting visitor:', error);
        return { success: false, error: error.message };
    }
};

// Get visitor analytics
export const getVisitorAnalytics = async () => {
    try {
        const { success, visitors } = await getVisitors();

        if (!success) {
            return { success: false, analytics: {} };
        }

        const totalVisitors = visitors.length;
        const totalVisits = visitors.reduce((sum, visitor) => sum + visitor.visitCount, 0);
        const uniqueVisitors = visitors.length;

        // Device type analytics
        const deviceTypes = visitors.reduce((acc, visitor) => {
            const deviceType = visitor.deviceType || 'unknown';
            acc[deviceType] = (acc[deviceType] || 0) + 1;
            return acc;
        }, {});

        // Browser analytics
        const browsers = visitors.reduce((acc, visitor) => {
            const browser = visitor.browser || 'unknown';
            acc[browser] = (acc[browser] || 0) + 1;
            return acc;
        }, {});

        // Location analytics
        const countries = visitors.reduce((acc, visitor) => {
            const country = visitor.country || 'unknown';
            acc[country] = (acc[country] || 0) + 1;
            return acc;
        }, {});

        return {
            success: true,
            analytics: {
                totalVisitors,
                totalVisits,
                uniqueVisitors,
                deviceTypes,
                browsers,
                countries
            }
        };
    } catch (error) {
        console.error('Error getting analytics:', error);
        return { success: false, error: error.message, analytics: {} };
    }
}; 