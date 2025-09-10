'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Building2, User, Lock, AlertCircle } from 'lucide-react'
import { authenticateUser, createSession } from '@/lib/auth'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [showTestUsers, setShowTestUsers] = useState(false)

  const testAccounts = [
    { email: 'admin@empresa.com', password: 'admin123', role: 'Administrador' },
    { email: 'cliente@test.com', password: 'cliente123', role: 'Cliente' },
    { email: 'usuario@empresa.com', password: 'usuario123', role: 'Usuario Interno' },
    { email: 'gerente@cliente.com', password: 'gerente123', role: 'Gerente Cliente' },
    { email: 'soporte@empresa.com', password: 'soporte123', role: 'Soporte' }
  ]

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      // Authenticate user
      const user = authenticateUser(email, password)
      
      if (user) {
        // Create session
        const session = createSession(user)
        
        // Store session in localStorage (in production, use secure cookies)
        localStorage.setItem('userSession', JSON.stringify(session))
        
        // Redirect to dashboard
        window.location.href = '/dashboard'
      } else {
        setError('Credenciales inválidas. Por favor verifica tu email y contraseña.')
      }
    } catch (err) {
      setError('Error al iniciar sesión. Por favor intenta nuevamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleTestLogin = (testEmail: string, testPassword: string) => {
    setEmail(testEmail)
    setPassword(testPassword)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md p-6">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Intranet</h1>
          <p className="text-gray-600">Acceso a documentación de clientes</p>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Iniciar Sesión</CardTitle>
            <CardDescription className="text-center">
              Ingresa tus credenciales para acceder
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{error}</span>
                </div>
              )}
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Iniciando sesión...
                  </div>
                ) : (
                  'Iniciar Sesión'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Test Users Panel */}
        <div className="mt-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowTestUsers(!showTestUsers)}
            className="w-full"
          >
            {showTestUsers ? 'Ocultar' : 'Mostrar'} Usuarios de Prueba
          </Button>
          
          {showTestUsers && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">👨‍💼 Usuarios de Prueba</CardTitle>
                <CardDescription>
                  Haz clic en cualquier usuario para autocompletar los campos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {testAccounts.map((account, index) => (
                  <div
                    key={index}
                    onClick={() => handleTestLogin(account.email, account.password)}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-sm">{account.email}</p>
                      <p className="text-xs text-gray-600">{account.role}</p>
                    </div>
                    <div className="text-xs text-gray-500">
                      {account.password}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="text-center mt-6 text-sm text-gray-600">
          <p>¿Problemas para acceder? Contacta al administrador</p>
        </div>
      </div>
    </div>
  )
}
