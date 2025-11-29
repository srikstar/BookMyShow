import React, { useState } from "react";
import { add_theater } from "../../APIs/theater.api";

function Partner() {

    const [form, setForm] = useState({
        name: "", address: "", email: "", phone: "",
        owner: "", isActive: true,
    });

    const handleChange = (e) =>
        setForm({ 
            ...form, 
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value 
        });

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
          const response = await add_theater(form)
          return response
        } catch (error) {
          return error
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "auto" }}>
            <h2>Add New Theater</h2>

            <form onSubmit={handleSubmit}>

                <label>Theater Name</label>
                <input type="text" name="name" placeholder="Enter theater name"
                    value={form.name} onChange={handleChange} required />

                <label>Address</label>
                <textarea name="address" placeholder="Enter full address"
                    value={form.address} onChange={handleChange} required />

                <label>Contact Email</label>
                <input type="email" name="email" placeholder="email@example.com"
                    value={form.email} onChange={handleChange} required />

                <label>Phone Number</label>
                <input type="number" name="phone" placeholder="Enter phone number"
                    value={form.phone} onChange={handleChange} required />

                <label>
                    <input type="checkbox" name="isActive"
                        checked={form.isActive} onChange={handleChange} />
                    Active
                </label>

                <br /><br />

                <button type="submit">Add Theater</button>
            </form>
        </div>
    );
}

export default Partner;
