import {
  FileText,
  Ship,
  Info,
  Anchor,
  ArrowLeftRight,
  Wrench,
  Users,
  ClipboardCheck,
  Truck,
  Fuel,
  LifeBuoy,
  Scale,
  UserCheck,
  FileCheck,
  CalendarCheck,
  Building2,
  Shield,
  HeartPulse,
} from "lucide-react";

export const services = [
  {
    title: "Arrival & Departure Clearance",
    description:
      "Pengurusan dokumen kedatangan dan keberangkatan kapal dari dan ke pelabuhan.",
    icon: FileText,
  },
  {
    title: "Bill of Lading Arrangement",
    description:
      "Pengurusan dan koordinasi dokumen bill of lading untuk kelancaran perdagangan laut Anda.",
    icon: FileCheck,
  },
  {
    title: "Port Call Information",
    description:
      "Penyediaan informasi lengkap terkait jadwal dan kondisi panggilan pelabuhan.",
    icon: Info,
  },
  {
    title: "Offshore Support",
    description:
      "Dukungan operasi lepas pantai termasuk supply vessel dan maintenance offshore.",
    icon: Anchor,
  },
  {
    title: "Ship-to-Ship Transhipment",
    description:
      "Koordinasi dan pengurusan dokumen untuk operasi pemindahan kargo antar kapal.",
    icon: ArrowLeftRight,
  },
  {
    title: "Dry-Docking & New Building Support",
    description:
      "Dukungan teknis dan dokumen untuk perawatan kapal di galangan kapal serta pembangunan baru.",
    icon: Wrench,
  },
  {
    title: "Port Captain & Stevedores",
    description:
      "Pengawasan teknis operasi pelabuhan dan koordinasi kegiatan bongkar muat.",
    icon: Users,
  },
  {
    title: "Surveyor Coordination",
    description:
      "Koordinasi surveyor untuk inspeksi kapal, kargo, dan kondisi teknis armada Anda.",
    icon: ClipboardCheck,
  },
  {
    title: "Logistics, Forwarding & Customs Clearance",
    description:
      "Solusi logistik laut dan darat yang terintegrasi termasuk pengurusan bea cukai.",
    icon: Truck,
  },
  {
    title: "Ship / Rig Lay Up",
    description:
      "Dukungan dan pengurusan dokumen untuk penarikan sementara kapal atau rig dari operasional.",
    icon: Ship,
  },
  {
    title: "Ship Chandler & Bunkering",
    description:
      "Penyediaan kebutuhan kapal dan pengisian bahan bakar berkualitas dengan harga kompetitif.",
    icon: Fuel,
  },
  {
    title: "Vessel / Cargo Pre-Planning",
    description:
      "Perencanaan awal kunjungan kapal dan kargo untuk memastikan kelancaran operasional di pelabuhan.",
    icon: CalendarCheck,
  },
  {
    title: "Owner Protective Agency",
    description:
      "Layanan agen perlindungan pemilik kapal untuk memastikan kepentingan dan aset terlindungi selama operasi.",
    icon: Shield,
  },
  {
    title: "Liner Agency / NVOCC",
    description:
      "Layanan keagenan liner dan non-vessel operating common carrier untuk rute tetap dan pengiriman konsolidasi.",
    icon: Building2,
  },
  {
    title: "Husbandry Services",
    description:
      "Crew change, e-Visa, akomodasi, transportasi, dan seluruh kebutuhan logistik awak kapal selama sandar di pelabuhan.",
    icon: LifeBuoy,
  },
  {
    title: "Crew Manning",
    description:
      "Penyediaan awak kapal terlatih dan bersertifikat untuk kebutuhan operasional Anda.",
    icon: UserCheck,
  },
  {
    title: "Ship & Cargo Brokerage",
    description:
      "Perantaraan jual beli, sewa kapal, dan pengurusan kargo dengan jaringan yang luas.",
    icon: Scale,
  },
  {
    title: "Medical Evacuation",
    description:
      "Layanan evakuasi medis darurat untuk awak kapal yang membutuhkan pertolongan segera.",
    icon: HeartPulse,
  },
];
