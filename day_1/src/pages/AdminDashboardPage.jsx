import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import MkdSDK from "../utils/MkdSDK";
import "../App.css";

const AdminDashboardPage = () => {

  const [dashboardData, setDashboardData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (page) => {
    try {
      const sdk = new MkdSDK();
      const data = await sdk.callRestAPI({
        payload: {},
        page: page,
        limit: 10,
      }, 'PAGINATE');
      setDashboardData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  const handleLogout = () => {
    let sdk = new MkdSDK();
    sdk.logout(); 
    history.push('/admin/login');
  };
  const tableData = [
    { id: 1, title: "Book 1", username: "Author 1", like: 10 },
    { id: 2, title: "Book 2", username: "Author 2", like: 15 },
    { id: 3, title: "Book 3", username: "Author 3", like: 8 },
    { id: 4, title: "Book 4", username: "Author 4", like: 12 },
    { id: 5, title: "Book 5", username: "Author 5", like: 20 },
  ];

  const handleDragEnd = (result) => {
    // TODO: Handle drag and drop logic
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  
  return (
    <>
     <div className="table-top2">
      <div className="app-text">
        APP
      </div>
      <div className="logout-button" onClick={handleLogout}>
        <input
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          value="Log Out"
        />
      </div>
    </div>


      
   
      <div className="table-top">
        <div className="table-header-left">Today's leaderboard</div>
        <div className="table-header-right">
          {new Date().toLocaleString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
        </div>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Most Liked</th>
            </tr>
          </thead>
          {dashboardData && (
            <Droppable droppableId="table">
            {(provided) => (
              <tbody {...provided.droppableProps} ref={provided.innerRef}>
                {dashboardData.list.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                    {(provided) => (
                      <tr
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="dashboard-table-row"
                      >
                        <td className="table-cell">{index + 1}</td>
                        <td className="table-cell">
                          <img
                            src={item.photo || "https://fastly.picsum.photos/id/866/200/200.jpg?hmac=i0ngmQOk9dRZEzhEosP31m_vQnKBQ9C19TBP1CGoIUA"}
                            alt="Img"
                            className="book-image"
                          />
                          {item.title}
                        </td>
                        <td className="table-cell">{item.username}</td>
                        <td className="table-cell">{item.like}</td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
          )}
        </table>
      </DragDropContext>
      <div className="pagination-buttons">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button onClick={handleNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Next
        </button>
      </div>
    </>
  );
  
};

export default AdminDashboardPage;
