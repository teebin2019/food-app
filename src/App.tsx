import { useEffect, useState } from "react";
import { NavLink } from "react-router";

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
      <div className="container mx-auto">
        <div className="space-y-10">
          <div>
            <h1 className="text-5xl font-bold text-center">Food App</h1>
          </div>
          <div>
            <NavLink
              to="/add"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              end
            >
              เพิ่มอาหาร
            </NavLink>
          </div>
          <div>
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
                      <td className="px-6 py-4">
                        <NavLink
                          to={`/edit/${item.id}`}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          end
                        >
                          แก้ไข
                        </NavLink>
                        <button
                          type="button"
                          onClick={() => alert("ลบ")}
                          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          ลบ
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
