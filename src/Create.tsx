import { NavLink } from "react-router";

function Create() {
  return (
    <>
      <div className="container mx-auto">
        <div className="space-y-10">
          <div>
            <h1 className="text-5xl font-bold text-center">Food App</h1>
          </div>

          <div>
            <p className="text-2xl font-bold ">เพิ่มอาหาร</p>
          </div>
          <div>
            <form className="max-w-full mx-auto">
              <div className="mb-5">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ชื่ออาหาร
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                  placeholder="กรุณากรอกชื่ออาหาร"
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
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-1"
              >
                บันทึก
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

export default Create;
