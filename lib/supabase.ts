import { createClient } from '@supabase/supabase-js'

// Pakai project Supabase yang sama dengan Omzeet Kasir/BOS/Admin --
// anon key ini memang public (sudah ter-bundle di APK Kasir), aman
// dipakai di sini. Cuma dipakai untuk baca data publik (paket
// langganan aktif) lewat RLS "Anyone can read active plans".
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)

export type SubscriptionPlan = {
  id: string
  name: string
  price_monthly: number
  price_yearly: number
  max_outlets: number
  max_users_per_outlet: number
  features: string[]
  sort_order: number
}

export async function getKasirPlans(): Promise<SubscriptionPlan[]> {
  const { data, error } = await supabase
    .from('subscription_plans')
    .select('id, name, price_monthly, price_yearly, max_outlets, max_users_per_outlet, features, sort_order')
    .eq('is_active', true)
    .eq('app', 'kasir')
    .order('sort_order', { ascending: true })

  if (error || !data) return []
  return data as SubscriptionPlan[]
}

export function formatRupiah(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount)
}
