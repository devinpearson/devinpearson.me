// Liveness check for the container healthcheck and the deploy workflow.
export const dynamic = 'force-dynamic'

export function GET() {
  return Response.json({ ok: true })
}
