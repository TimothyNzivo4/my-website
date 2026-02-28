export default function Logs() {
  let logs: any[] = [];
  try {
    logs = JSON.parse(localStorage.getItem('app_logs') || '[]');
  } catch (e) {
    logs = [];
  }

  return (
    <div style={{ padding: 40, minHeight: '100vh', background: '#0f1720', color: '#fff' }}>
      <h1>App Logs</h1>
      <p>Recent runtime errors (stored in localStorage)</p>
      {logs.length === 0 && <p style={{ color: '#9aa' }}>No logs captured.</p>}
      <div style={{ marginTop: 16, display: 'grid', gap: 12 }}>
        {logs.map((l, i) => (
          <details key={i} style={{ background: '#081124', padding: 12, borderRadius: 8 }}>
            <summary style={{ color: '#ff8c6a' }}>{l.time} — {l.message}</summary>
            <pre style={{ whiteSpace: 'pre-wrap', color: '#ddd' }}>{l.stack || JSON.stringify(l.info, null, 2)}</pre>
          </details>
        ))}
      </div>
    </div>
  );
}
