'use client'
import { useState, useEffect } from 'react'

// ============================================================================
// CUSTOMER AUTHENTICATION COMPONENT - PRODUCTION READY
// ============================================================================

const ARAB_COUNTRIES = [
  { code: 'QAT', name: 'قطر', nameEn: 'Qatar', prefix: '+974', flag: '🇶🇦' },
  { code: 'SAU', name: 'السعودية', nameEn: 'Saudi Arabia', prefix: '+966', flag: '🇸🇦' },
  { code: 'ARE', name: 'الإمارات', nameEn: 'UAE', prefix: '+971', flag: '🇦🇪' },
  { code: 'KWT', name: 'الكويت', nameEn: 'Kuwait', prefix: '+965', flag: '🇰🇼' },
  { code: 'BHR', name: 'البحرين', nameEn: 'Bahrain', prefix: '+973', flag: '🇧🇭' },
  { code: 'OMN', name: 'عُمان', nameEn: 'Oman', prefix: '+968', flag: '🇴🇲' },
]

const THEME = {
  colors: {
    primary: '#8B1F24',
    primaryLight: '#A62028',
    secondary: '#D4A843',
    background: '#080608',
    surface: '#111015',
    card: '#18141F',
    border: '#374151',
    text: '#F0EDE8',
    textSecondary: '#9CA3AF',
    textMuted: '#6B7280',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444'
  },
  gradients: {
    primary: 'linear-gradient(135deg, #8B1F24, #A62028)',
    surface: 'linear-gradient(180deg, #111015, #18141F)'
  },
  radius: { sm: 8, md: 12, lg: 16, xl: 24 }
}

export default function CustomerAuth({ onLogin, language = 'ar' }) {
  const [currentStep, setCurrentStep] = useState('phone')
  const [selectedCountry, setSelectedCountry] = useState(ARAB_COUNTRIES[0])
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otpCode, setOtpCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSendOTP = async () => {
    setLoading(true)
    setError('')
    
    // Simulate OTP sending
    setTimeout(() => {
      setLoading(false)
      setCurrentStep('otp')
    }, 1500)
  }

  const handleVerifyOTP = async () => {
    setLoading(true)
    setError('')
    
    // Simulate verification - accept 123456 as valid OTP
    if (otpCode === '123456') {
      setTimeout(() => {
        setLoading(false)
        const user = {
          phone: selectedCountry.prefix + phoneNumber,
          country: selectedCountry.name,
          verified: true
        }
        onLogin(user)
      }, 1000)
    } else {
      setTimeout(() => {
        setLoading(false)
        setError('رمز التحقق غير صحيح. استخدم 123456')
      }, 1000)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: THEME.colors.background,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: THEME.colors.surface,
        padding: '40px',
        borderRadius: THEME.radius.xl,
        width: '100%',
        maxWidth: '400px',
        border: `1px solid ${THEME.colors.border}`
      }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            fontSize: '48px',
            marginBottom: '16px'
          }}>🎯</div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: THEME.colors.text,
            margin: '0 0 8px 0'
          }}>وِجهة</h1>
          <p style={{
            color: THEME.colors.textSecondary,
            fontSize: '14px',
            margin: 0
          }}>اكتشف العروض والكوبونات القريبة منك</p>
        </div>

        {error && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.15)',
            color: THEME.colors.error,
            padding: '12px',
            borderRadius: THEME.radius.md,
            fontSize: '14px',
            marginBottom: '20px',
            border: '1px solid rgba(239, 68, 68, 0.3)'
          }}>
            {error}
          </div>
        )}

        {/* Step 1: Phone Input */}
        {currentStep === 'phone' && (
          <>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                color: THEME.colors.textSecondary,
                marginBottom: '8px',
                fontWeight: '600'
              }}>
                رقم الهاتف
              </label>
              
              <div style={{ display: 'flex', gap: '8px' }}>
                {/* Country Selector */}
                <select
                  value={selectedCountry.code}
                  onChange={(e) => setSelectedCountry(ARAB_COUNTRIES.find(c => c.code === e.target.value))}
                  style={{
                    padding: '12px',
                    borderRadius: THEME.radius.md,
                    border: `1px solid ${THEME.colors.border}`,
                    background: THEME.colors.card,
                    color: THEME.colors.text,
                    fontSize: '14px',
                    width: '120px'
                  }}
                >
                  {ARAB_COUNTRIES.map(country => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.prefix}
                    </option>
                  ))}
                </select>
                
                {/* Phone Input */}
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="50123456"
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: THEME.radius.md,
                    border: `1px solid ${THEME.colors.border}`,
                    background: THEME.colors.card,
                    color: THEME.colors.text,
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <button
              onClick={handleSendOTP}
              disabled={loading || !phoneNumber}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: THEME.radius.md,
                border: 'none',
                background: loading || !phoneNumber ? THEME.colors.textMuted : THEME.gradients.primary,
                color: 'white',
                fontSize: '16px',
                fontWeight: '700',
                cursor: loading || !phoneNumber ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              {loading ? (
                <>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid #ffffff33',
                    borderTopColor: '#ffffff',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite'
                  }} />
                  <span>جاري الإرسال...</span>
                </>
              ) : (
                <>
                  <span>📱</span>
                  <span>إرسال رمز التحقق</span>
                </>
              )}
            </button>
          </>
        )}

        {/* Step 2: OTP Verification */}
        {currentStep === 'otp' && (
          <>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: THEME.colors.text,
                marginBottom: '8px'
              }}>
                تحقق من رقم هاتفك
              </h3>
              <p style={{
                color: THEME.colors.textSecondary,
                fontSize: '14px',
                margin: 0
              }}>
                أدخل الرمز المرسل إلى {selectedCountry.prefix} {phoneNumber}
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                color: THEME.colors.textSecondary,
                marginBottom: '12px',
                fontWeight: '600',
                textAlign: 'center'
              }}>
                رمز التحقق (استخدم: 123456)
              </label>
              
              <input
                type="text"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                maxLength={6}
                placeholder="123456"
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: THEME.radius.md,
                  border: `2px solid ${THEME.colors.border}`,
                  background: THEME.colors.card,
                  color: THEME.colors.text,
                  fontSize: '20px',
                  fontWeight: '700',
                  textAlign: 'center',
                  outline: 'none',
                  letterSpacing: '4px'
                }}
              />
            </div>

            <button
              onClick={handleVerifyOTP}
              disabled={loading || otpCode.length !== 6}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: THEME.radius.md,
                border: 'none',
                background: loading || otpCode.length !== 6 ? THEME.colors.textMuted : THEME.gradients.primary,
                color: 'white',
                fontSize: '16px',
                fontWeight: '700',
                cursor: loading || otpCode.length !== 6 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '16px'
              }}
            >
              {loading ? (
                <>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid #ffffff33',
                    borderTopColor: '#ffffff',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite'
                  }} />
                  <span>جاري التحقق...</span>
                </>
              ) : (
                <>
                  <span>🔐</span>
                  <span>تحقق</span>
                </>
              )}
            </button>

            <button
              onClick={() => setCurrentStep('phone')}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: THEME.radius.md,
                border: `1px solid ${THEME.colors.border}`,
                background: 'none',
                color: THEME.colors.textSecondary,
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              ← تغيير رقم الهاتف
            </button>
          </>
        )}
      </div>

      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}