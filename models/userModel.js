const { db } = require("../config/database.config");
const usersCollection = db.collection("UsersCrud");

// TRAER TODOS LOS USUARIOS
const getAll = async () => {
    const snapshot = await usersCollection.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// TRAER EL USUARIO POR ID
const getById = async (id) => {
    const doc = await usersCollection.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() };
};

// CREAR UN USUARIO
const create = async (name, email) => {
    if (!isValidEmail(email)) {
        throw new Error("Correo electrónico no válido.");
    }
    const newUser = { name, email };
    const docRef = await usersCollection.add(newUser);
    return { id: docRef.id, ...newUser };
};

// ACTUALIZAR USUARIO
const update = async (id, name, email) => {
    const userRef = usersCollection.doc(id);
    const doc = await userRef.get();
    if (!doc.exists) throw new Error("Usuario no encontrado.");

    const updates = {};
    if (name !== undefined) updates.name = name;
    if (email !== undefined) {
        if (!isValidEmail(email)) throw new Error("Correo electrónico no válido.");
        updates.email = email;
    }

    await userRef.update(updates);
    return { id, ...doc.data(), ...updates };
};

// ELIMINAR USUARIO
const remove = async (id) => {
    const userRef = usersCollection.doc(id);
    const doc = await userRef.get();
    if (!doc.exists) return null;
    await userRef.delete();
    return { id, ...doc.data() };
};

// Validación de correo electrónico
const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

module.exports = { getAll, getById, create, update, remove };