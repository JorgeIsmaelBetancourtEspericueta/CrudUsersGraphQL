const { gql } = require("apollo-server");
//const gql = require("apollo-server").gql

const typeDefs = gql`
    """Representa a un usuario dentro del sistema"""
    type User {
        """Identificador único del usuario"""
        id: ID!
        """Nombre completo del usuario"""
        name: String!
        """Correo electrónico del usuario"""
        email: String!
    }
    
    """Consultas disponibles para obtener información de los usuarios"""
    type Query {
        """Obtiene la lista completa de usuarios registrados"""
        getUsers: [User]
        """Obtiene un usuario específico según su ID"""
        getUser(id: ID!): User
    }

    """Operaciones de modificación sobre los usuarios"""
    type Mutation { 
        """Crea un nuevo usuario con nombre y correo electrónico"""
        createUser(name: String!, email: String!): User
        """Actualiza la información (nombre y/o email) de un usuario existente"""
        updateUser(id: ID!, name: String!, email: String!): User
        """Elimina un usuario del sistema según su ID"""
        deleteUser(id: ID!): User
    }
`;

module.exports = typeDefs;