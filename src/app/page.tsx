export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#080608',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#F0EDE8'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎯</div>
        <h1 style={{ fontSize: '28px', marginBottom: '8px', color: '#F0EDE8' }}>وِجهة</h1>
        <p style={{ marginBottom: '24px', color: '#9CA3AF' }}>اكتشف العروض القريبة منك</p>
        <p style={{ color: '#10B981', marginBottom: '16px' }}>✅ الموقع يعمل بنجاح!</p>
        <div style={{
          padding: '16px',
          background: '#8B1F24',
          color: 'white',
          borderRadius: '8px',
          fontSize: '14px',
          marginTop: '20px'
        }}>
          🎉 تم نشر تطبيق وِجهة بنجاح على الإنترنت! 🎉
        </div>
      </div>
    </div>
  )
}
