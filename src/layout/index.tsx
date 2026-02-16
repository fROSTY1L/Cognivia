import { SidebarProvider } from '@/components/ui/sidebar'
import { Outlet } from '@tanstack/react-router'
import React from 'react'

const AppLayout = () => {
  return (
    <SidebarProvider>
      
    </SidebarProvider>
  )
}

export default AppLayout
