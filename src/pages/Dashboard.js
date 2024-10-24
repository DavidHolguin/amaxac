// src/pages/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stat Cards */}
        {[
          { title: 'Alertas Activas', value: '12' },
          { title: 'Reportes Hoy', value: '24' },
          { title: 'Zonas Seguras', value: '8' },
          { title: 'Usuarios Activos', value: '156' }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 font-medium">{stat.title}</h3>
            <p className="text-2xl font-semibold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;