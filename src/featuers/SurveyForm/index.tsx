import { JSX } from 'react';

import { SurveyCreationForm } from './components/SurveyCreationForm';
import styles from './index.module.css';

export function SurveyForm(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.creationContainer}>
        <SurveyCreationForm />
      </div>
      <div className={styles.previewContainer}>
        <SurveyCreationForm />
      </div>
    </div>
  );
}
