export async function GET() {
    return Response.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        service: 'introduccion-devops'
    });
}
