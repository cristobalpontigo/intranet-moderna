'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X, Download, FileText, ZoomIn, ZoomOut } from 'lucide-react'

interface PDFViewerProps {
  documentId: string
  documentName: string
  onClose: () => void
}

export default function PDFViewer({ documentId, documentName, onClose }: PDFViewerProps) {
  const [zoom, setZoom] = useState(100)
  
  // Mapeo de documentos a PDFs de ejemplo (en producción vendrían de la API)
  const getDocumentContent = (docId: string) => {
    const documents: { [key: string]: string } = {
      '1': `
        <div style="font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; color: #333;">
          <div style="text-align: center; margin-bottom: 40px; border-bottom: 3px solid #2563eb; padding-bottom: 20px;">
            <h1 style="color: #2563eb; margin: 0; font-size: 24px;">CONTRATO DE SERVICIOS 2024</h1>
            <p style="color: #666; margin: 10px 0;">Documento Confidencial</p>
          </div>
          
          <div style="margin-bottom: 30px;">
            <h2 style="color: #1f2937; border-left: 4px solid #2563eb; padding-left: 15px;">INFORMACIÓN GENERAL</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <p><strong>Número de Contrato:</strong> SERV-2024-001</p>
              <p><strong>Fecha de Emisión:</strong> 15 de Marzo, 2024</p>
              <p><strong>Vigencia:</strong> 12 meses</p>
              <p><strong>Cliente:</strong> Cliente Test S.A.</p>
            </div>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #1f2937; border-left: 4px solid #2563eb; padding-left: 15px;">SERVICIOS INCLUIDOS</h2>
            <ul style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <li style="margin: 10px 0;">🔧 Mantenimiento preventivo mensual</li>
              <li style="margin: 10px 0;">🛠️ Soporte técnico 24/7</li>
              <li style="margin: 10px 0;">📊 Reportes de rendimiento</li>
              <li style="margin: 10px 0;">🔄 Actualizaciones de software</li>
            </ul>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #1f2937; border-left: 4px solid #2563eb; padding-left: 15px;">TÉRMINOS Y CONDICIONES</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <p style="margin: 15px 0;">1. <strong>Duración:</strong> El presente contrato tendrá vigencia de 12 meses a partir de la fecha de firma.</p>
              <p style="margin: 15px 0;">2. <strong>Renovación:</strong> El contrato se renovará automáticamente por períodos iguales salvo notificación en contrario.</p>
              <p style="margin: 15px 0;">3. <strong>Facturación:</strong> Los servicios se facturarán mensualmente con 30 días de crédito.</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 50px; padding-top: 30px; border-top: 1px solid #e5e7eb;">
            <p style="color: #666; font-size: 14px;">Documento generado automáticamente - Página 1 de 1</p>
          </div>
        </div>
      `,
      '2': `
        <div style="font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; color: #333;">
          <div style="text-align: center; margin-bottom: 40px; border-bottom: 3px solid #059669; padding-bottom: 20px;">
            <h1 style="color: #059669; margin: 0; font-size: 24px;">MANUAL DE USUARIO v2.1</h1>
            <p style="color: #666; margin: 10px 0;">Guía Completa del Sistema</p>
          </div>
          
          <div style="margin-bottom: 30px;">
            <h2 style="color: #1f2937; border-left: 4px solid #059669; padding-left: 15px;">INTRODUCCIÓN</h2>
            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <p>Bienvenido al Manual de Usuario de la Intranet. Este documento te guiará a través de todas las funcionalidades disponibles en el sistema.</p>
            </div>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #1f2937; border-left: 4px solid #059669; padding-left: 15px;">INICIO DE SESIÓN</h2>
            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #059669;">Paso 1: Acceder al sistema</h3>
              <p>1. Abrir el navegador web</p>
              <p>2. Ingresar la URL del sistema</p>
              <p>3. Introducir credenciales</p>
              
              <h3 style="color: #059669; margin-top: 25px;">Paso 2: Navegación</h3>
              <p>• Dashboard principal</p>
              <p>• Búsqueda de documentos</p>
              <p>• Filtros por categoría</p>
            </div>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #1f2937; border-left: 4px solid #059669; padding-left: 15px;">GESTIÓN DE DOCUMENTOS</h2>
            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <p><strong>Visualización:</strong> Haz clic en el botón "Ver" para abrir el documento</p>
              <p><strong>Descarga:</strong> Usa el botón "Descargar" para guardar una copia local</p>
              <p><strong>Búsqueda:</strong> Utiliza la barra de búsqueda para encontrar documentos específicos</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 50px; padding-top: 30px; border-top: 1px solid #e5e7eb;">
            <p style="color: #666; font-size: 14px;">Manual de Usuario - Versión 2.1 - Página 1 de 1</p>
          </div>
        </div>
      `,
      '3': `
        <div style="font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; color: #333;">
          <div style="text-align: center; margin-bottom: 40px; border-bottom: 3px solid #dc2626; padding-bottom: 20px;">
            <h1 style="color: #dc2626; margin: 0; font-size: 24px;">FACTURA MARZO 2024</h1>
            <p style="color: #666; margin: 10px 0;">Factura N° 2024-0315</p>
          </div>
          
          <div style="display: flex; justify-content: space-between; margin-bottom: 40px;">
            <div style="background: #fef2f2; padding: 20px; border-radius: 8px; flex: 1; margin-right: 20px;">
              <h3 style="color: #dc2626; margin-top: 0;">DATOS DEL PROVEEDOR</h3>
              <p><strong>Empresa Principal S.A.</strong></p>
              <p>Calle Principal 123</p>
              <p>Ciudad, País</p>
              <p>RFC: EMP123456789</p>
            </div>
            <div style="background: #fef2f2; padding: 20px; border-radius: 8px; flex: 1;">
              <h3 style="color: #dc2626; margin-top: 0;">DATOS DEL CLIENTE</h3>
              <p><strong>Cliente Test S.A.</strong></p>
              <p>Avenida Cliente 456</p>
              <p>Ciudad Cliente, País</p>
              <p>RFC: CLI987654321</p>
            </div>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #1f2937; border-left: 4px solid #dc2626; padding-left: 15px;">DETALLE DE SERVICIOS</h2>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: #fef2f2;">
              <thead>
                <tr style="background: #dc2626; color: white;">
                  <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Concepto</th>
                  <th style="padding: 12px; text-align: right; border: 1px solid #ddd;">Cantidad</th>
                  <th style="padding: 12px; text-align: right; border: 1px solid #ddd;">Precio Unit.</th>
                  <th style="padding: 12px; text-align: right; border: 1px solid #ddd;">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding: 12px; border: 1px solid #ddd;">Servicios de Consultoría</td>
                  <td style="padding: 12px; text-align: right; border: 1px solid #ddd;">1</td>
                  <td style="padding: 12px; text-align: right; border: 1px solid #ddd;">$5,000.00</td>
                  <td style="padding: 12px; text-align: right; border: 1px solid #ddd;">$5,000.00</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border: 1px solid #ddd;">Soporte Técnico</td>
                  <td style="padding: 12px; text-align: right; border: 1px solid #ddd;">1</td>
                  <td style="padding: 12px; text-align: right; border: 1px solid #ddd;">$2,500.00</td>
                  <td style="padding: 12px; text-align: right; border: 1px solid #ddd;">$2,500.00</td>
                </tr>
                <tr style="background: #dc2626; color: white; font-weight: bold;">
                  <td style="padding: 12px; border: 1px solid #ddd;" colspan="3">TOTAL</td>
                  <td style="padding: 12px; text-align: right; border: 1px solid #ddd;">$7,500.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 30px 0;">
            <h3 style="color: #dc2626; margin-top: 0;">CONDICIONES DE PAGO</h3>
            <p>• Fecha de vencimiento: 15 de Abril, 2024</p>
            <p>• Método de pago: Transferencia bancaria</p>
            <p>• Cuenta: 1234567890</p>
          </div>

          <div style="text-align: center; margin-top: 50px; padding-top: 30px; border-top: 1px solid #e5e7eb;">
            <p style="color: #666; font-size: 14px;">Factura generada automáticamente - Documento válido</p>
          </div>
        </div>
      `
    }
    
    return documents[docId] || '<div style="padding: 40px; text-align: center;"><h2>Documento no encontrado</h2><p>El documento solicitado no está disponible.</p></div>'
  }

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50))
  }

  const handleDownload = () => {
    // Crear un blob con el contenido HTML del documento
    const content = getDocumentContent(documentId)
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>${documentName}</title>
          <style>
            body { margin: 0; font-family: Arial, sans-serif; }
            @media print {
              body { margin: 1cm; }
            }
          </style>
        </head>
        <body>
          ${content}
        </body>
      </html>
    `
    
    const blob = new Blob([htmlContent], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = documentName.replace('.pdf', '.html')
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-[90vw] h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-3">
            <FileText className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">{documentName}</h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={handleZoomOut}>
              <ZoomOut className="w-4 h-4" />
            </Button>
            
            <span className="text-sm text-gray-600 min-w-[60px] text-center">
              {zoom}%
            </span>
            
            <Button variant="outline" size="sm" onClick={handleZoomIn}>
              <ZoomIn className="w-4 h-4" />
            </Button>
            
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="w-4 h-4 mr-1" />
              Descargar
            </Button>
            
            <Button variant="outline" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto bg-gray-100 p-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="bg-white shadow-lg min-h-[800px]"
              style={{ 
                transform: `scale(${zoom / 100})`,
                transformOrigin: 'top center',
                marginBottom: zoom > 100 ? `${(zoom - 100) * 4}px` : '0'
              }}
              dangerouslySetInnerHTML={{ __html: getDocumentContent(documentId) }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
