import React from 'react';
import { useTranslation } from 'react-i18next';

function Orders() {
  const { t } = useTranslation();
  console.log('dans la page orders')
  return (
    <div className="flex">
      <h1>{t('ordersPage.title')}</h1>
    </div>
  );
}

export default Orders;
