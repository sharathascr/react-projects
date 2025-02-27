import React, { useEffect, useState } from "react";

function SearchList() {
  const [list, setList] = useState([]);
  const [filteredList, setFilterList] = useState([]);
  const [inpValue, setInpValue] = useState("");
  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((result) => {
          setList(result);
          setFilterList(result);
        });
    };
    fetchData();
  }, []);
  useEffect(() => {
    const updateUserList = list.filter((user) =>
      user.name.toLowerCase().includes(inpValue.toLowerCase())
    );
    setFilterList(updateUserList);
  }, [inpValue, list]);
  return (
    <div style={{ margin: "30px auto ", width: "50%" }}>
      <div style={{ textAlign: "center" }}>
        <input
          value={inpValue}
          onChange={(e) => setInpValue(e.target.value)}
          placeholder="search..."
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "20px",
          }}
        />
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredList.map((user) => (
          <li
            key={user.id}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
