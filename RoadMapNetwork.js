import java.io.IOException;
import java.net.URL;
import java.net.URLConnection;

class Edge{
	int edgeID;
	int startNodeId;
	int endNodeId;
	float l2Distance;
}

public class Main{

	public static void main(String[] args){
		try {
			URL edgesUrl = new URL(spec: "https://gist.githubusercontent.com/BenjaminMalley/9eadf45dbe11ba9c3ac34c45f905cfe8/raw/2c363711b601fa39a5d0071f10158b86217e530f/edges.json");
			URLConnection conn = edgesUrl.openConnection();
			JsonObject edgesObject = Json.createReader(conn.getInputStream()).readObject();
			for(Map.Entry<String, JsonValue>entry : edgesObject.entrySet()){
				JsonObject edgeObject = entry.getValue().asJsonObject();
				Edge edge = new Edge();
				edge.edgeID = edgeObject.getInt(s: "EgdeId");
				edge.startNodeId = edgeObject.getInt(s: "StartNodeId");
				edge.endNodeId = edgeObject.getInt(s: "EndNodeId");
				edge.l2Distance = edgeObject.getJsonNumber(s: "L2Distance").numberValue().floatValue();
				edges.add(edge);
			}
			for(Edge edge : edges){
				System.out.println(edge.edgeID);
			}
		} catch (IOException e){

		}
		
	}
}