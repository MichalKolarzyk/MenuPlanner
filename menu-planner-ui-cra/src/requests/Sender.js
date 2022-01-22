class Sender {
    async send(request) {
        const baseUrl = "http://localhost:5000"
        try {
            const response = await fetch(`${baseUrl}${request.url}`, {
                method: request.methodName,
                body: JSON.stringify(request.body),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjgiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4gQWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsIkRhdGVPZkJpcnRoIjoiMTk5My0xMC0yMyIsIk5hdGlvbmFsaXR5IjoiUG9sYW5kIiwiZXhwIjoxNjUxMDY3NjM5LCJpc3MiOiJodHRwOi8vcmVzdGF1cmFudGFwaS5jb20iLCJhdWQiOiJodHRwOi8vcmVzdGF1cmFudGFwaS5jb20ifQ.USikUaK7O-kKUAJovdLbQ1nxoT3waia6zpHIIX9VweE"
                }
            });
            return await response.json();
        }
        catch (error) {
            console.log(error.message);
        }
    }

    async send2(request, connection) {
        const baseUrl = connection.url;
        try {
            const response = await fetch(`${baseUrl}${request.url}`, {
                method: request.methodName,
                body: JSON.stringify(request.body),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${connection.token}`
                }
            });
            return await response.json();
        }
        catch (error) {
            console.log(error.message);
        }
    }
}
export default Sender