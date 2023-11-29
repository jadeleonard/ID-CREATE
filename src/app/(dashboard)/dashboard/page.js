export default async function Dashboard() {
    try {
        const response = await supabaseClient.from('post').select();
        if (!response.ok) {
            throw new Error('Error fetching data from Supabase');
        } else {
            const posts = response.data; // Assuming the data property holds the array of posts
            return (
                <div>
                    <h1>Posts</h1>
                    <ul>
                        {posts.map((post,index) => (
                            <li key={index}>{post.post}</li>
                        ))}
                    </ul>
                </div>
            );
        }
    } catch (error) {
        console.error(error);
        return <div>Error fetching data</div>;
    }
}
