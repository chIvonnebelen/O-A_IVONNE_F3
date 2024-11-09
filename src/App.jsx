import React, { useState } from 'react';
import "./styles/App.css";
import Card from "./Components/Card";


function App() {
  const [formData, setFormData] = useState({
    firstField: '',
    secondField: ''
  });

  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const firstFieldTrimmed = formData.firstField.trim();
    const secondFieldTrimmed = formData.secondField.trim();

    if (firstFieldTrimmed.length < 3 || formData.firstField.startsWith(' ')) {
      return 'Por favor chequea que la información sea correcta';
    }
    if (secondFieldTrimmed.length < 6) {
      return 'Por favor chequea que la información sea correcta';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formError = validateForm();
    if (formError) {
      setError(formError);
      setSubmittedData(null);
    } else {
      setError('');
      setSubmittedData(formData);
    }
  };

  return (
    <div className="App">
      <h1>Tu música en tu radio</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ingresa tu artista favorito:</label>
          <input
            type="text"
            name="firstField"
            value={formData.firstField}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Ingresa tu canción favorita:</label>
          <input
            type="text"
            name="secondField"
            value={formData.secondField}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {submittedData && <Card submittedData={submittedData} />}
    </div>
  );
}

export default App;