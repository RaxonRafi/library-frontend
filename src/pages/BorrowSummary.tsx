import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";


const BorrowSummaryTable = () => {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery(undefined);

  if (isLoading) return <p>Loading borrow summary...</p>;
  if (isError || !data?.data) return <p>Failed to load borrow summary.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📊 Borrow Summary</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Title</th>
              <th className="border px-4 py-2 text-left">ISBN</th>
              <th className="border px-4 py-2 text-left">Total Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((entry:any, index:number) => (
              <tr key={index}>
                <td className="border px-4 py-2">{entry.book.title}</td>
                <td className="border px-4 py-2">{entry.book.isbn}</td>
                <td className="border px-4 py-2">{entry.totalQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowSummaryTable;
