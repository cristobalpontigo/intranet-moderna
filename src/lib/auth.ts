// Mock users for testing the intranet system
export interface User {
  id: string;
  email: string;
  password: string; // In production, this would be hashed
  name: string;
  role: 'admin' | 'client' | 'user';
  company: string;
  department?: string;
  avatar?: string;
  permissions: string[];
  isActive: boolean;
  lastLogin?: string;
  documentsAccess: string[]; // Document categories this user can access
}

// Test users for development
export const testUsers: User[] = [
  {
    id: '1',
    email: 'admin@empresa.com',
    password: 'admin123', // In production: bcrypt.hashSync('admin123', 10)
    name: 'Administrador Sistema',
    role: 'admin',
    company: 'Empresa Principal',
    department: 'Sistemas',
    permissions: ['read', 'write', 'delete', 'manage_users', 'manage_documents'],
    isActive: true,
    lastLogin: '2024-03-15T10:30:00Z',
    documentsAccess: ['Contratos', 'Manuales', 'Facturas', 'Propuestas', 'Reportes', 'Configuración']
  },
  {
    id: '2',
    email: 'cliente@test.com',
    password: 'cliente123',
    name: 'Juan Pérez',
    role: 'client',
    company: 'Cliente Test S.A.',
    department: 'Compras',
    permissions: ['read', 'download'],
    isActive: true,
    lastLogin: '2024-03-14T16:45:00Z',
    documentsAccess: ['Contratos', 'Facturas', 'Propuestas']
  },
  {
    id: '3',
    email: 'usuario@empresa.com',
    password: 'usuario123',
    name: 'María González',
    role: 'user',
    company: 'Empresa Principal',
    department: 'Ventas',
    permissions: ['read', 'write', 'download'],
    isActive: true,
    lastLogin: '2024-03-15T09:15:00Z',
    documentsAccess: ['Contratos', 'Propuestas', 'Reportes']
  },
  {
    id: '4',
    email: 'gerente@cliente.com',
    password: 'gerente123',
    name: 'Carlos Rodríguez',
    role: 'client',
    company: 'Cliente VIP Corp',
    department: 'Gerencia',
    permissions: ['read', 'download', 'request_documents'],
    isActive: true,
    lastLogin: '2024-03-13T14:20:00Z',
    documentsAccess: ['Contratos', 'Manuales', 'Facturas', 'Propuestas', 'Reportes']
  },
  {
    id: '5',
    email: 'soporte@empresa.com',
    password: 'soporte123',
    name: 'Ana López',
    role: 'user',
    company: 'Empresa Principal',
    department: 'Soporte Técnico',
    permissions: ['read', 'write', 'manage_documents'],
    isActive: true,
    lastLogin: '2024-03-15T11:00:00Z',
    documentsAccess: ['Manuales', 'Reportes', 'Configuración']
  }
];

// Authentication functions
export const authenticateUser = (email: string, password: string): User | null => {
  const user = testUsers.find(u => u.email === email && u.isActive);
  
  if (user && user.password === password) {
    // In production, use bcrypt.compare(password, user.password)
    return {
      ...user,
      lastLogin: new Date().toISOString()
    };
  }
  
  return null;
};

export const getUserById = (id: string): User | null => {
  return testUsers.find(u => u.id === id && u.isActive) || null;
};

export const getUserByEmail = (email: string): User | null => {
  return testUsers.find(u => u.email === email && u.isActive) || null;
};

// Session management
export interface UserSession {
  user: Omit<User, 'password'>;
  token: string;
  expiresAt: string;
}

export const createSession = (user: User): UserSession => {
  // Remove password from session
  const { password, ...userWithoutPassword } = user;
  
  return {
    user: userWithoutPassword,
    token: generateToken(),
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
  };
};

const generateToken = (): string => {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
};
