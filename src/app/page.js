const url = "https://back-end-ifms-gamma.vercel.app/campi";

export default async function Home() {

  const resposta = await fetch(url,{
    next: {
      revalidate: 1
    }
  });
  const campi = await resposta.json();
 
  return (
    <main>
      <h1>Home</h1>
      {campi.map((campus) =>
        <div>
             <p>{campus.nome_campus}</p>
        </div>
      )}
    </main>
  )
}