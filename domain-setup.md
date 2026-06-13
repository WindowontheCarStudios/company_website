# Domain setup notes

The domain provided was:

```text
window_on_the_car.com
```

That exact hostname uses underscores, which are not valid for a normal public website hostname. Use a hyphenated or plain-letter version instead, such as:

```text
window-on-the-car.com
windowonthecar.com
```

## Recommended DNS records for GitHub Pages

For the apex domain, add these `A` records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Optional IPv6 `AAAA` records:

```text
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

For `www`, add a `CNAME` record:

```text
www -> your-github-username.github.io
```

Do not include the repository name in the `www` CNAME target.
