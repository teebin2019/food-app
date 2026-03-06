import { useEffect, useState } from "react";

interface Food {
  id: number;
  name: string;
  price: string;
}

function App() {
  const [data, setData] = useState<Food[]>([]);

  async function fetchData() {
    try {
      const response = await fetch("/api/foods/?offset=0&limit=50");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-5xl font-bold mb-5">Food App</h1>
      <hr />
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ลำดับ
              </th>
              <th scope="col" className="px-6 py-3">
                ชื่ออาหาร
              </th>
              <th scope="col" className="px-6 py-3">
                ราคา
              </th>
              <th scope="col" className="px-6 py-3">
                ดำเนินการ
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                key={item.id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {idx + 1}
                </th>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
