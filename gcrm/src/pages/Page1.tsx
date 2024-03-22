import React from 'react';
import { Link } from 'react-router-dom';
import {
  useAddCompanyMutation,
  useGetCompaniesQuery,
} from '../features/company/companyApiSlice';

export function Page1() {
  const local = localStorage.getItem('companyName');

  const {
    data: companies,
    isLoading,
    isFetching,
    isError,
  } = useGetCompaniesQuery({});
  const [addCompany] = useAddCompanyMutation();

  console.log(companies, isLoading, isFetching, isError);

  if (isLoading) return <div>Loading...</div>;
  if (!companies) return <div>No companies</div>;

  return (
    <>
      <div className="bg-blue-400 flex justify-center">Page 1 from GCRM</div>
      <h1> local hosttan okunan değer : {local}</h1>
      <Link to="/page-2">Go to Page 2</Link>

      {companies && (
        <div>
          {companies.customers.map((company: any) => (
            <div key={company.id}>{company.title}</div>
          ))}
        </div>
      )}

      <button
        onClick={() => addCompany({ code: '1234', title: 'aydar company' })}
      >
        YENİ FİRMA EKLE
      </button>
    </>
  );
}
