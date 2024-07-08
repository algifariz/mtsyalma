'use client'

import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';


const SchoolProfile = () => {
  return (
    <Container className="my-5">
      <Card className="mx-auto">
        <Card.Body>
          <h1 className="text-center text-blue mb-4">Profil MTs AL-MA&apos;ARIJ</h1>
          <Table bordered hover responsive className="text-left">
            <tbody>
              <tr>
                <td className="py-2 px-4 font-weight-bold">Nama Sekolah</td>
                <td className="py-2 px-4">MTs AL-MA&apos;ARIJ</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-weight-bold">Jenjang</td>
                <td className="py-2 px-4">Madrasah Tsanawiyah</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-weight-bold">NPSN</td>
                <td className="py-2 px-4">20512345</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-weight-bold">Alamat</td>
                <td className="py-2 px-4">Jl. Pendidikan No. 10, Sukabumi</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-weight-bold">Kecamatan</td>
                <td className="py-2 px-4">Cibeureum</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-weight-bold">Kabupaten/Kota</td>
                <td className="py-2 px-4">Sukabumi</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-weight-bold">Provinsi</td>
                <td className="py-2 px-4">Jawa Barat</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-weight-bold">Tanggal Berdiri</td>
                <td className="py-2 px-4">1 Januari 1995</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-weight-bold">Status</td>
                <td className="py-2 px-4">Swasta</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-weight-bold">Akreditasi</td>
                <td className="py-2 px-4">A</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-weight-bold">No. SK Akreditasi</td>
                <td className="py-2 px-4">12345/SK/BAN-PT/Akred/M/VI/2019</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-weight-bold">Kepala Sekolah</td>
                <td className="py-2 px-4">Drs. Ahmad Syamsuri</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SchoolProfile;
