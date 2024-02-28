name="barreleyescan"
external_port="80"
internal_port="5173"
docker run -d -it -p ${external_port}:${internal_port} --name ${name} -v /data:/data kym6772/barreleyescan:1.0.0