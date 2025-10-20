# Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# App Download URLs (leave blank if not available)
NEXT_PUBLIC_APPSTORE_URL=""
NEXT_PUBLIC_TESTFLIGHT_URL=""

# Company Information
NEXT_PUBLIC_SUPPORT_EMAIL="support@greenhaus.app"
NEXT_PUBLIC_COMPANY_NAME="GreenHaus"
NEXT_PUBLIC_COMPANY_ADDRESS=""
```

## Usage

- **NEXT_PUBLIC_APPSTORE_URL**: The primary App Store or production app URL
- **NEXT_PUBLIC_TESTFLIGHT_URL**: Fallback URL if App Store URL is not available
- The app will use APPSTORE_URL first, then TESTFLIGHT_URL, then fallback to `/coming-soon`
- If both app URLs are empty, download buttons will be disabled (visible but not clickable)
- A small QR code will appear next to the primary CTA only when an app link is available

