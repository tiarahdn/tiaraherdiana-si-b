export default function RiwayatPekerjaan() {
    return(
        <div className="container mx-auto p-2 text-center pt-20">
      <h2 className="text-2xl">Riwayat Pekerjaan</h2>
      <RowRiwayatPekerjaan tahunbekerja="2011-2015" instansi="BANK BRI CICALENGKA" bekerjasebagai="COSTUMER SERVICE" />
      <RowRiwayatPekerjaan tahunbekerja="2016-2017" instansi="CV EXECOM" bekerjasebagai="OPERATOR DESIGN" />
      <RowRiwayatPekerjaan tahunbekerja="2018-2020" instansi="TELKOM INDONESIA" bekerjasebagai="UI UX DESIGN" />
      <RowRiwayatPekerjaan tahunbekerja="2021-sekarang" instansi="UNIVERSITAS PADJAJARAN" bekerjasebagai="DOSEN" />
      </div>
  );
}
    
interface RowRiwayatKerjaProps {
    tahunbekerja: string;
    instansi: string;
    bekerjasebagai: string;
  }
  
  function RowRiwayatPekerjaan(props: RowRiwayatKerjaProps) {
    return(
        <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-300 p-2 my-5">
            <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-1">
                <div className="col-span-12 md:col-span-4">{props.tahunbekerja}</div>
                <div className="col-span-12 md:col-span-4">{props.instansi}
                </div>
                <div className="col-span-12 md:col-span-4">{props.bekerjasebagai}
                </div>
            </div>
            </div>
        </div>
    )
  }