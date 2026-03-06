import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";

function Edit() {
  const params = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [isSell, setIsSell] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/foods/" + params.id);
      const result = await response.json();
      setName(result.name);
      setPrice(result.price);
      setIsSell(result.is_sell);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  const submit = async (e: any) => {
    e.preventDefault();

    try {
      // ✅ Fix 1: Use params.id instead of hardcoded 7
      const response = await fetch("/api/foods/" + params.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          price: price,
          is_sell: isSell, // ✅ Fix 2: Use isSell state instead of hardcoded false
        }),
        redirect: "follow",
      });
      const result = await response.json();
      console.log(result);
      window.history.back();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="space-y-10">
          <div>
            <h1 className="text-5xl font-bold text-center">Food App</h1>
          </div>

          <div>
            <p className="text-2xl font-bold ">แก้ไขอาหาร</p>
          </div>
          <div>
            <form className="max-w-full mx-auto" onSubmit={submit}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ชื่ออาหาร
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                  placeholder="กรุณากรอกชื่ออาหาร"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ราคา
                </label>
                <input
                  type="number"
                  id="price"
                  className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                  placeholder="กรุณากรอกราคาอาหาร"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  เผยเพย
                </label>
                <div className="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value="true"
                    checked={isSell === true}
                    onChange={() => setIsSell(true)}
                    name="bordered-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="bordered-radio-1"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    เผยแพร่
                  </label>
                </div>
                <div className="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700">
                  <input
                    id="bordered-radio-2"
                    type="radio"
                    value="false"
                    checked={isSell === false}
                    onChange={() => setIsSell(false)}
                    name="bordered-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="bordered-radio-2"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    ไม่เผยแพร่
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-1"
              >
                แก้ไข
              </button>
              <NavLink
                to="/"
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                end
              >
                ย้อนกลับ
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
