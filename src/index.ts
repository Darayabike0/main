export interface OrderRow {
  customerName: string;
  orderDate: number;
}

export default {
  async fetch(request: Request, env: any) {
    const url = new URL(request.url);
    
    // ตรวจสอบว่ามีฐานข้อมูล MY_DB หรือไม่
    if (env.MY_DB) {
      const result = await env.MY_DB.prepare("SELECT * FROM orders").all();
      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response("Hello! Worker is running, but MY_DB is not connected.");
  }
};
