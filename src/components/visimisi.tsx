'use client'

import React from 'react';
import { Container, Card } from 'react-bootstrap';

const VisionMission = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center text-blue mb-4">VISI DAN MISI MTs AL-MA&apos;ARIJ</h1>

      <section className="mb-4">
        <h2 className="mb-3 text-blue ">Visi</h2>
        <Card className="p-3">
          <Card.Body>
            Menjadi madrasah yang unggul dalam ilmu pengetahuan dan teknologi dengan landasan nilai-nilai Islam, serta menghasilkan lulusan yang berakhlak mulia dan berprestasi di tingkat nasional pada tahun 2025.
          </Card.Body>
        </Card>
      </section>

      <section className="mb-4">
        <h2 className="mb-3 text-blue">Misi</h2>
        <Card className="p-3">
          <Card.Body>
            <ul>
              <li>Menyelenggarakan pendidikan yang berbasis nilai-nilai keislaman dan kemanusiaan.</li>
              <li>Mengembangkan potensi peserta didik di bidang akademik dan non-akademik.</li>
              <li>Menyelenggarakan kegiatan penelitian dan pengabdian kepada masyarakat.</li>
              <li>Membangun kerjasama dengan berbagai pihak untuk meningkatkan kualitas pendidikan.</li>
              <li>Menanamkan nilai-nilai akhlak mulia dan cinta tanah air.</li>
            </ul>
          </Card.Body>
        </Card>
      </section>

      <section>
        <h2 className="mb-3 text-blue">Tujuan</h2>
        <Card className="p-3">
          <Card.Body>
            <ul>
              <li>Menghasilkan lulusan yang berakhlak mulia dan kompeten dalam bidang ilmu pengetahuan dan teknologi.</li>
              <li>Menjadi pusat pengembangan pendidikan yang berbasis nilai-nilai Islam dan kebangsaan.</li>
              <li>Meningkatkan kualitas dan kuantitas penelitian dan pengabdian kepada masyarakat.</li>
            </ul>
          </Card.Body>
        </Card>
      </section>
    </Container>
  );
};

export default VisionMission;
