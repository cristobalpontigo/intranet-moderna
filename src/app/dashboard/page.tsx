'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  FileText, 
  Search, 
  Download, 
  User, 
  LogOut, 
  Bell, 
  Settings,
  Filter,
  Eye,
  Shield
} from 'lucide-react'
import { UserSession } from '@/lib/auth'
import PDFViewer from '@/components/PDFViewer'
import AdminPanel from '@/components/AdminPanel'

interface Document {
  id: string
  name: string
  type: string
  uploadDate: string
  size: string
  category: string
}

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [userSession, setUserSession] = useState<UserSession | null>(null)
  const [viewingDocument, setViewingDocument] = useState<{ id: string; name: string } | null>(null)
  const [showAdminPanel, setShowAdminPanel] = useState(false)
  
  useEffect(() => {
    // Get user session from localStorage
    const session = localStorage.getItem('userSession')
    if (session) {
      try {
        const parsedSession: UserSession = JSON.parse(session)
        // Check if session is expired
        if (new Date(parsedSession.expiresAt) > new Date()) {
          setUserSession(parsedSession)
        } else {
          // Session expired, redirect to login
          localStorage.removeItem('userSession')
          window.location.href = '/login'
        }
      } catch (error) {
        // Invalid session, redirect to login
        localStorage.removeItem('userSession')
        window.location.href = '/login'
      }
    } else {
      // No session, redirect to login
      window.location.href = '/login'
    }
  }, [])

  // Datos de ejemplo
  const documents: Document[] = [
    {
      id: '1',
      name: 'Contrato_Servicios_2024.pdf',
      type: 'PDF',
      uploadDate: '2024-03-15',
      size: '2.4 MB',
      category: 'Contratos'
    },
    {
      id: '2',
      name: 'Manual_Usuario_v2.1.pdf',
      type: 'PDF',
      uploadDate: '2024-03-10',
      size: '5.8 MB',
      category: 'Manuales'
    },
    {
      id: '3',
      name: 'Factura_Marzo_2024.pdf',
      type: 'PDF',
      uploadDate: '2024-03-05',
      size: '180 KB',
      category: 'Facturas'
    },
    {
      id: '4',
      name: 'Propuesta_Comercial.pdf',
      type: 'PDF',
      uploadDate: '2024-02-28',
      size: '1.2 MB',
      category: 'Propuestas'
    },
    {
      id: '5',
      name: 'Reporte_Mensual_Feb.pdf',
      type: 'PDF',
      uploadDate: '2024-02-25',
      size: '890 KB',
      category: 'Reportes'
    },
    {
      id: '6',
      name: 'Configuracion_Sistema.pdf',
      type: 'PDF',
      uploadDate: '2024-02-20',
      size: '1.5 MB',
      category: 'Configuración'
    }
  ]

  const categories = ['all', 'Contratos', 'Manuales', 'Facturas', 'Propuestas', 'Reportes', 'Configuración']

  // Filter documents based on user permissions
  const availableDocuments = userSession 
    ? documents.filter(doc => userSession.user.documentsAccess.includes(doc.category))
    : []

  const filteredDocuments = availableDocuments.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Filter categories based on user access
  const availableCategories = userSession
    ? ['all', ...userSession.user.documentsAccess]
    : ['all']

  const handleViewDocument = (docId: string, docName: string) => {
    setViewingDocument({ id: docId, name: docName })
  }

  const handleCloseViewer = () => {
    setViewingDocument(null)
  }

  const handleDownloadDocument = (docId: string, docName: string) => {
    // Simular descarga de documento
    const link = document.createElement('a')
    link.href = '#'
    link.download = docName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Mostrar mensaje de confirmación
    alert(`Descarga iniciada: ${docName}`)
  }

  const handleLogout = () => {
    localStorage.removeItem('userSession')
    window.location.href = '/login'
  }

  // Loading state while checking session
  if (!userSession) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    )
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800'
      case 'client': return 'bg-blue-100 text-blue-800'
      case 'user': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Intranet - Portal de Documentos</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              {userSession.user.role === 'admin' && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowAdminPanel(true)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Shield className="w-4 h-4 mr-1" />
                  Admin
                </Button>
              )}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-600" />
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-700">{userSession.user.name}</span>
                    <div className="flex items-center space-x-1">
                      <span className={`text-xs px-2 py-1 rounded-full ${getRoleColor(userSession.user.role)}`}>
                        {userSession.user.role === 'admin' ? 'Administrador' : 
                         userSession.user.role === 'client' ? 'Cliente' : 'Usuario'}
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-1" />
                  Salir
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            ¡Bienvenido, {userSession.user.name}!
          </h2>
          <p className="text-gray-600">
            {userSession.user.company} - {userSession.user.department}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Documentos Disponibles</p>
                  <p className="text-2xl font-bold text-gray-900">{availableDocuments.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Download className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Categorías de Acceso</p>
                  <p className="text-2xl font-bold text-gray-900">{userSession.user.documentsAccess.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Eye className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Permisos</p>
                  <p className="text-2xl font-bold text-gray-900">{userSession.user.permissions.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Filter className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Último Acceso</p>
                  <p className="text-sm font-bold text-gray-900">
                    {userSession.user.lastLogin ? 
                      new Date(userSession.user.lastLogin).toLocaleDateString('es-ES') : 
                      'Primer acceso'
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Buscar Documentos</CardTitle>
            <CardDescription>
              Encuentra rápidamente los documentos que necesitas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar por nombre de documento..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Todas las categorías</option>
                {availableCategories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Documents List */}
        <Card>
          <CardHeader>
            <CardTitle>Documentos Disponibles</CardTitle>
            <CardDescription>
              {filteredDocuments.length} documento(s) encontrado(s)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredDocuments.map((document) => (
                <div
                  key={document.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-red-100 rounded">
                      <FileText className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{document.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span>{document.category}</span>
                        <span>•</span>
                        <span>{document.size}</span>
                        <span>•</span>
                        <span>{new Date(document.uploadDate).toLocaleDateString('es-ES')}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    {userSession.user.permissions.includes('read') && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewDocument(document.id, document.name)}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Ver
                      </Button>
                    )}
                    {userSession.user.permissions.includes('download') && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownloadDocument(document.id, document.name)}
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Descargar
                      </Button>
                    )}
                  </div>
                </div>
              ))}
              
              {filteredDocuments.length === 0 && (
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No se encontraron documentos</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* PDF Viewer Modal */}
      {viewingDocument && (
        <PDFViewer 
          documentId={viewingDocument.id}
          documentName={viewingDocument.name}
          onClose={handleCloseViewer}
        />
      )}

      {/* Admin Panel Modal */}
      {showAdminPanel && (
        <AdminPanel onClose={() => setShowAdminPanel(false)} />
      )}
    </div>
  )
}
