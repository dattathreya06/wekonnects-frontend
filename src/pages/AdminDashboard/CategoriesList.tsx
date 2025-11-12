import React, { useState } from "react";
import "../../components/layout/layout.css";
import { useNavigate } from "react-router-dom";

import loansImg from "../../assets/icons/loans.png";
import softwareImg from "../../assets/icons/software.png";
import spaImg from "../../assets/icons/spa.png";

interface Category {
  id: number;
  name: string;
  image: string;
  active: boolean;
}

const CategoriesList: React.FC = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "Loans", image: loansImg, active: true },
    { id: 2, name: "Software", image: softwareImg, active: true },
    { id: 3, name: "Spa", image: spaImg, active: false },
  ]);

  const toggleStatus = (id: number) => {
    setCategories((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, active: !c.active } : c
      )
    );
  };

  return (
    <div className="dashboard-content">
      <h1 className="page-title">Categories List</h1>

      <div className="category-header">
        <div className="entries-select">
          <span>Show</span>
          <select>
            <option>10</option>
            <option>20</option>
          </select>
          <span>Entries</span>
        </div>

        <button
          className="add-category-btn"
          onClick={() => navigate("/admin/categories/add")}
        >
          Add Category
        </button>
      </div>

      <div className="categories-table">
        <table>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Gallery Image</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={cat.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="category-image"
                  />
                </td>
                <td className="category-name">{cat.name}</td>
                <td>
                  <div
                    className={`toggle-switch ${
                      cat.active ? "on" : "off"
                    }`}
                    onClick={() => toggleStatus(cat.id)}
                  >
                    <div className="toggle-circle"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination-container">
          <button className="pagination-btn prev">⟪ Previous</button>
          <div className="pagination-numbers">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                className={`page-num ${num === 3 ? "active" : ""}`}
              >
                {num}
              </button>
            ))}
          </div>
          <button className="pagination-btn next">Next ⟫</button>
        </div>

        <p className="pagination-info">
          Showing 1 to 10 of 14 entries
        </p>
      </div>
    </div>
  );
};

export default CategoriesList;
