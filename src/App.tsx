import { CenterPlaced } from '~/featuers/CenterPlaced';
import { SimpleForm } from '~/featuers/SimpleForm';

export function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <CenterPlaced>
        <SimpleForm />
      </CenterPlaced>
    </div>
  );
}
