'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Users, 
  Upload, 
  FileText, 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Save,
  X,
  UserCheck,
  FolderOpen,
  Settings
} from 'lucide-react'

interface Client {
  id: string
  name: string
  email: string
  company: string
  documentsAccess: string[]
  permissions: string[]
  isActive: boolean
}

interface ClientDocument {
  id: string
  clientId: string
  name: string
  category: string
  uploadDate: string
  size: string
  content?: string
}

interface AdminPanelProps {
  onClose: () => void
}

export default function AdminPanel({ onClose }: AdminPanelProps) {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [clientDocuments, setClientDocuments] = useState<ClientDocument[]>([])
  const [showUploadForm, setShowUploadForm] = useState(false)
  const [newDocument, setNewDocument] = useState({
    name: '',
    category: '',
    content: ''
  })
  const [searchTerm, setSearchTerm] = useState('')

  // Datos de clientes de ejemplo
  const [clients] = useState<Client[]>([
    {
      id: '1',
      name: 'Juan Pérez',
      email: 'cliente@test.com',
      company: 'Test Corp S.A.',
      documentsAccess: ['Contratos', 'Facturas', 'Reportes'],
      permissions: ['read', 'download'],
      isActive: true
    },
    {
      id: '2',
      name: 'María González',
      email: 'maria@empresa.com',
      company: 'Empresa Ejemplo S.L.',
      documentsAccess: ['Contratos', 'Manuales'],
      permissions: ['read'],
      isActive: true
    },
    {
      id: '3',
      name: 'Carlos Rodríguez',
      email: 'vip@cliente.com',
      company: 'VIP Industries Ltd.',
      documentsAccess: ['Contratos', 'Facturas', 'Reportes', 'Propuestas', 'Configuración'],
      permissions: ['read', 'download', 'print'],
      isActive: true
    },
    {
      id: '4',
      name: 'Ana Martínez',
      email: 'usuario@empresa.com',
      company: 'Usuario Básico Corp.',
      documentsAccess: ['Manuales'],
      permissions: ['read'],
      isActive: false
    }
  ])

  // Documentos por cliente
  const [allClientDocuments, setAllClientDocuments] = useState<ClientDocument[]>([
    {
      id: 'doc1',
      clientId: '1',
      name: 'Contrato_TestCorp_2024.pdf',
      category: 'Contratos',
      uploadDate: '2024-03-15',
      size: '1.2 MB'
    },
    {
      id: 'doc2',
      clientId: '1', 
      name: 'Factura_TestCorp_Marzo.pdf',
      category: 'Facturas',
      uploadDate: '2024-03-10',
      size: '450 KB'
    },
    {
      id: 'doc3',
      clientId: '2',
      name: 'Contrato_Empresa_2024.pdf',
      category: 'Contratos',
      uploadDate: '2024-02-28',
      size: '980 KB'
    },
    {
      id: 'doc4',
      clientId: '3',
      name: 'Propuesta_VIP_Premium.pdf',
      category: 'Propuestas',
      uploadDate: '2024-03-01',
      size: '2.1 MB'
    },
    {
      id: 'doc5',
      clientId: '3',
      name: 'Configuracion_VIP_Sistema.pdf',
      category: 'Configuración',
      uploadDate: '2024-02-25',
      size: '1.8 MB'
    }
  ])

  const categories = ['Contratos', 'Manuales', 'Facturas', 'Propuestas', 'Reportes', 'Configuración']

  useEffect(() => {
    if (selectedClient) {
      const docs = allClientDocuments.filter(doc => doc.clientId === selectedClient.id)
      setClientDocuments(docs)
    }
  }, [selectedClient, allClientDocuments])

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSelectClient = (client: Client) => {
    setSelectedClient(client)
    setShowUploadForm(false)
  }

  const handleUploadDocument = () => {
    if (selectedClient && newDocument.name && newDocument.category) {
      const doc: ClientDocument = {
        id: `doc_${Date.now()}`,
        clientId: selectedClient.id,
        name: newDocument.name,
        category: newDocument.category,
        uploadDate: new Date().toISOString().split('T')[0],
        size: '1.0 MB', // Simulado
        content: newDocument.content
      }
      
      setAllClientDocuments([...allClientDocuments, doc])
      setNewDocument({ name: '', category: '', content: '' })
      setShowUploadForm(false)
      
      // Mostrar confirmación
      alert(`Documento "${doc.name}" cargado exitosamente para ${selectedClient.name}`)
    }
  }

  const handleDeleteDocument = (docId: string) => {
    if (confirm('¿Estás seguro de que deseas eliminar este documento?')) {
      setAllClientDocuments(allClientDocuments.filter(doc => doc.id !== docId))
    }
  }

  const getClientStatusColor = (isActive: boolean) => {
    return isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-7xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b bg-blue-50">
          <div className="flex items-center space-x-3">
            <Settings className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Panel de Administración</h2>
          </div>
          <Button variant="outline" onClick={onClose}>
            <X className="w-4 h-4 mr-1" />
            Cerrar
          </Button>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Lista de Clientes */}
          <div className="w-1/3 border-r bg-gray-50 flex flex-col">
            <div className="p-4 border-b bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Clientes</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar clientes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {filteredClients.map((client) => (
                <Card 
                  key={client.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedClient?.id === client.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => handleSelectClient(client)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{client.name}</h4>
                        <p className="text-sm text-gray-600">{client.email}</p>
                        <p className="text-xs text-gray-500 mt-1">{client.company}</p>
                        <div className="flex items-center mt-2 space-x-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${getClientStatusColor(client.isActive)}`}>
                            {client.isActive ? 'Activo' : 'Inactivo'}
                          </span>
                          <span className="text-xs text-gray-500">
                            {client.documentsAccess.length} categorías
                          </span>
                        </div>
                      </div>
                      <UserCheck className="w-4 h-4 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Panel de Gestión de Documentos */}
          <div className="flex-1 flex flex-col">
            {selectedClient ? (
              <>
                {/* Información del Cliente */}
                <div className="p-6 border-b bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{selectedClient.name}</h3>
                      <p className="text-gray-600">{selectedClient.company}</p>
                      <div className="flex items-center mt-2 space-x-4">
                        <span className="text-sm text-gray-500">
                          Categorías de acceso: {selectedClient.documentsAccess.join(', ')}
                        </span>
                        <span className="text-sm text-gray-500">
                          Permisos: {selectedClient.permissions.join(', ')}
                        </span>
                      </div>
                    </div>
                    <Button onClick={() => setShowUploadForm(true)}>
                      <Upload className="w-4 h-4 mr-1" />
                      Cargar Documento
                    </Button>
                  </div>
                </div>

                {/* Formulario de Carga de Documento */}
                {showUploadForm && (
                  <div className="p-6 border-b bg-yellow-50">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Nuevo Documento</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre del Documento
                        </label>
                        <Input
                          placeholder="ej: Contrato_Cliente_2024.pdf"
                          value={newDocument.name}
                          onChange={(e) => setNewDocument({...newDocument, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Categoría
                        </label>
                        <select
                          value={newDocument.category}
                          onChange={(e) => setNewDocument({...newDocument, category: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Seleccionar categoría</option>
                          {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contenido del Documento (opcional)
                      </label>
                      <textarea
                        placeholder="Contenido o descripción del documento..."
                        value={newDocument.content}
                        onChange={(e) => setNewDocument({...newDocument, content: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                      />
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <Button onClick={handleUploadDocument}>
                        <Save className="w-4 h-4 mr-1" />
                        Guardar Documento
                      </Button>
                      <Button variant="outline" onClick={() => setShowUploadForm(false)}>
                        Cancelar
                      </Button>
                    </div>
                  </div>
                )}

                {/* Lista de Documentos del Cliente */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Documentos ({clientDocuments.length})
                    </h4>
                  </div>
                  
                  <div className="space-y-3">
                    {clientDocuments.map((document) => (
                      <Card key={document.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-blue-100 rounded">
                                <FileText className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-900">{document.name}</h5>
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
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleDeleteDocument(document.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    
                    {clientDocuments.length === 0 && (
                      <div className="text-center py-8">
                        <FolderOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">No hay documentos para este cliente</p>
                        <Button 
                          variant="outline" 
                          className="mt-2"
                          onClick={() => setShowUploadForm(true)}
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Agregar Primer Documento
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Selecciona un Cliente
                  </h3>
                  <p className="text-gray-600">
                    Elige un cliente de la lista para gestionar sus documentos
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
