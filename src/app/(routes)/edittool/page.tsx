"use client"
import usePreventZoom from '@/app/lib/preventZoom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios'; // You can use Axios or any other library to make API calls.
import { iTool } from '@/app/lib/interfaces';
import { getToolDetail } from '@/app/lib/serverFunctions';
export default function EditTool() {
  usePreventZoom();
  const [tool, setTool] = useState<iTool | null>(null);

  const searchParams = useSearchParams();
  const id = searchParams.get('id');


    const { data, isLoading, isError, error } = useQuery({
    queryKey: ["toolDetail", id],
    queryFn: () => getToolDetail(id!),
    staleTime: 0,
  });


  // useEffect(() => {
  //   // Fetch the tool data using the 'id' from the URL query parameter.
  //   const fetchToolData = async () => {
  //     try {
  //       const response = await axios.get<iTool>(`/api/tools/${id}`); // Replace with your API endpoint to fetch tool data.
  //       setTool(response.data);
  //     } catch (error) {
  //       console.error('Error fetching tool data:', error);
  //     }
  //   };
  //
  //   if (id) {
  //     fetchToolData();
  //   }
  // }, [id]);
  //
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Perform the API call to update the tool data in your database.
      await axios.put(`/api/tools/${id}`, tool); // Replace with your API endpoint to update tool data.
      // Optionally, you can show a success message to the user.
      console.log('Tool data updated successfully!');
    } catch (error) {
      // Handle errors if the API call fails.
      console.error('Error updating tool data:', error);
    }
  };

  if (!tool) {
    // You can show a loading spinner or message while the data is being fetched.
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Tool</h1>
      <form onSubmit={handleFormSubmit}>
        {/* Tool Name */}
        <div>
          <label htmlFor="toolName">Tool Name:</label>
          <input
            type="text"
            id="toolName"
            value={tool.toolName}
            onChange={(e) => setTool({ ...tool, toolName: e.target.value })}
          />
        </div>

        {/* Tool Description */}
        <div>
          <label htmlFor="toolDescription">Tool Description:</label>
          <textarea
            id="toolDescription"
            value={tool.toolDescription || ''}
            onChange={(e) => setTool({ ...tool, toolDescription: e.target.value })}
          />
        </div>

        {/* Tool Brand */}
        <div>
          <label htmlFor="toolBrand">Tool Brand:</label>
          <input
            type="text"
            id="toolBrand"
            value={tool.toolBrand}
            onChange={(e) => setTool({ ...tool, toolBrand: e.target.value })}
          />
        </div>

        {/* Tool Model */}
        <div>
          <label htmlFor="toolModel">Tool Model:</label>
          <input
            type="text"
            id="toolModel"
            value={tool.toolModel || ''}
            onChange={(e) => setTool({ ...tool, toolModel: e.target.value })}
          />
        </div>

        {/* ... Add more input fields for other properties of the iTool interface ... */}

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

