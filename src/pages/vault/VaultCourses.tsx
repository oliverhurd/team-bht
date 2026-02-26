import React from 'react';
import { VaultSidebar } from '../../components/VaultSidebar';  // NEW
import { VaultDashboard } from '../../components/VaultDashboard';  // NEW
import { QuickAccess } from '../../components/QuickAccess';  // NEW

export function VaultCourses() {
  return (
    <div className="flex">
      <VaultSidebar />
      <div className="flex-1">
        <VaultDashboard />
        <QuickAccess />
      </div>
    </div>
  );
}