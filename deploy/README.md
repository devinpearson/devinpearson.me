# Server deployment

devinpearson.me runs on the Hetzner server (replacing Vercel) as the compose stack in
[compose.yml](compose.yml), in `~/stacks/devinpearson-me`: one container, `devinpearson-me`, the
standalone Next.js server on `127.0.0.1:8093` (read-only filesystem, unprivileged user). nginx on
the host serves https://devinpearson.me and https://www.devinpearson.me and proxies to it.

## Who sets up what

- **Ansible** (`~/projects/ansible/hetzner`, `playbooks/configure-devinpearson-me.yml`): the stack
  folder, the first `.env`, nginx and the TLS certificate. With `vault_github_token` in the vault it
  also fetches this compose file and starts the stack, which a rebuilt host needs.
- **Every push to `main`** ([../.github/workflows/deploy.yml](../.github/workflows/deploy.yml)):
  build the image, run [../scripts/docker-smoke-test.sh](../scripts/docker-smoke-test.sh), push
  `sha-<commit>` and `latest` to GHCR, copy `compose.yml` to the server, write `IMAGE_TAG` and
  `APP_PORT` to `.env` beside it, then `docker compose up --wait`. If the release doesn't become
  healthy, the previous `IMAGE_TAG` is started again and the run fails.

## Configuration

Repository variables (Settings → Secrets and variables → Actions → Variables):

| Variable | Default |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://devinpearson.me` (compiled in at build time; re-run the workflow after changing it) |
| `APP_PORT` | `8093` (must match the Ansible `DEVINPEARSON_ME_PORT`) |

Repository secrets: `SERVER_HOST`, `SERVER_USER`, `SERVER_SSH_KEY` (same as the other stacks).

## Locally

```bash
docker build -t devinpearson-me:local .
bash scripts/docker-smoke-test.sh devinpearson-me:local
docker run --rm -p 8093:3000 devinpearson-me:local    # http://localhost:8093
```

## On the server

```bash
cd ~/stacks/devinpearson-me
docker compose ps
docker compose logs -f web
```
