FROM    ubuntu:latest
RUN     apt-get update && apt-get install -y git
COPY    ./contents-puller.sh /contents-puller.sh
RUN     chmod 755 /contents-puller.sh
WORKDIR /
CMD [ "/contents-puller.sh" ]
