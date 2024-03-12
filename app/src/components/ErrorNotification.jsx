export const ErrorNotification = ({ errors }) => (
  <div>
    <ul>
      {errors.map((error, index) => (
        <li key={index}>{error}</li>
      ))}
    </ul>
  </div>
);
