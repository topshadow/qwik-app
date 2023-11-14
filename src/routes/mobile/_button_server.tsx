export function ButtonServer({ onClick$ }: { onClick$?: Function }) {
  return (
    <button onClick$={() => (onClick$ ? onClick$() : null)}>
      button server
    </button>
  );
}
