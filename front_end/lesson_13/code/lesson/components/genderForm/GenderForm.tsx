import { useFormik } from "formik";
import { useState } from "react";
import styles from './genderForm.module.css'

interface IFormData {
  name: string;
}

interface IGenderData {
  count: number,
  name: string,
  gender: string,
  probability: number;
}

export default function GenderForm() {

  const [genderData, setGenderData] = useState<IGenderData>({
    count: 0,
    name: '',
    gender: '',
    probability: 0
  });

  const fetchGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    setGenderData(data);
  };


  const formik = useFormik({
    initialValues: {
      name: ""
    } as IFormData,
    onSubmit: (values: IFormData, { resetForm }) => {
      resetForm();
      fetchGender(values.name);
    }
  });



  return (
    <div className="lesson-container">
      <h5>Know your gender ✨</h5>
      
      <form className={styles.genderForm} onSubmit={formik.handleSubmit}>
        <input placeholder="type your name" onChange={formik.handleChange} value={formik.values.name} name="name" type="text" />
        <button type="submit">send request</button>
      </form>

      {genderData.name && (
        <p>{genderData.name} is {genderData.gender === 'male' ? '💁‍♂️' : '💁‍♀️'} {genderData.probability * 100}%</p>
      )}
    </div>
  );
}


