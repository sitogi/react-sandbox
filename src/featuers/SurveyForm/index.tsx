import { JSX, useEffect, useState } from 'react';

import { SurveyCreationForm } from './components/SurveyCreationForm';
import styles from './index.module.css';
import { SurveyFormData } from './types';

type Props = {
  initialFormData?: SurveyFormData;
};

export function SurveyForm({ initialFormData = { title: '', description: '', questions: [] } }: Props): JSX.Element {
  const [formData, setFormData] = useState<SurveyFormData>(initialFormData);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className={styles.container}>
      <div className={styles.creationContainer}>
        <SurveyCreationForm initialData={formData} onSubmit={(data) => setFormData(data)} />
      </div>
      <div className={styles.previewContainer}>
        <SurveyCreationForm initialData={formData} onSubmit={(data) => setFormData(data)} />
      </div>
    </div>
  );
}
