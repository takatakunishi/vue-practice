FRONTDIR=front

up:
	docker-compose up -d

down:
	docker-compose down

shell:
	find . -name .env -type f -print0 |\
	xargs -0 grep PROJECTNAME |\
	sed -e 's/PROJECTNAME=//' |\
	xargs -I arg echo 'docker exec -it arg_front bash'