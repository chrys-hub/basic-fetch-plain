        //fetch datanya dari api github saya
        fetch('https://api.github.com/users/chrysnaardy123').then(function (response) {
            return response.json();
        }).then(function (data) {
            //kita simpan respon nya ke fungsi data lalu kita buat fungsi appendData(data)
            appendData(data);
            console.log("Data yang di dapat:")
            console.log(data);
        }).catch(function (err) {
            //catch error memudahkan debugging
            console.log('error:' + err);
        })
        //fungsi appednData tadi
        function appendData(data) {
            //pertama kita get div untuk menjadi parent dari data yang akan kita append nanti
            var divdataku = document.getElementById("datamap");
            //ke 2 kita create element untuk jadi element data kita nanti
            var nama = document.createElement("h2");
            var gambar = document.createElement('img');
            var alamat = document.createElement("h2");
            var follower = document.createElement("h2");
            var following = document.createElement("h2");
            var job = document.createElement("h2");
            var status=document.createElement("h2");
            var repo=document.createElement("h2");
            var bio = document.createElement("h2");
            gambar.src = data.avatar_url;
            //kita pake innerHtml untuk mengubah html element nya data.name di sini untuk mengambil object name
            //begitu juga seterusnya
            nama.innerHTML = 'Nama: ' + data.name;
            alamat.innerHTML = 'Negara: ' + data.location;
            follower.innerHTML = 'Pengikut: ' + data.followers;
            following.innerHTML = 'Mengikuti: ' + data.following;
            job.innerHTML = 'Pekerjaan: ' + data.company;
            if(data.hireable==true){
                status.innerHTML="Ketersediaan Untuk Di Sewa: Developer Sekarang Tersedia Untuk Di Sewa";
            }else{
                status.innerHTML="Ketersediaan Untuk Di Sewa: Developer Sekarang Tidak Dapat Di Sewa";
            }
            repo.innerHTML = 'Github Repository Owned: '+data.public_repos;
            bio.innerHTML = 'Bio: ' + data.bio;
            //kita append seluruh element yang tadi kita buat ke div parent kita
            divdataku.appendChild(gambar);
            divdataku.appendChild(nama);
            divdataku.appendChild(alamat);
            divdataku.appendChild(follower);
            divdataku.appendChild(following);
            divdataku.appendChild(job);
            divdataku.appendChild(status);
            divdataku.appendChild(repo);
            divdataku.appendChild(bio);

            //kita pakai json stringfy untuk mengembalikan sebuah response berwujud json
            var databentukjson = JSON.stringify(data,null,' ')
            //kita isikan ke dalam div jsondata
            document.getElementById("jsondata").innerHTML = databentukjson;


            //display load screen sebelum page ter load
            function onReady(callback) {
            var intervalId = window.setInterval(function() {
            if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
            }
            }, 5000);
            }   

            function setVisible(selector, visible) {
              document.querySelector(selector).style.display = visible ? 'block' : 'none';
            }

            onReady(function() {
              setVisible('.content', true);
              setVisible('#loading', false);
            });
                    }

                setTimeout(function(){
             document.getElementById('.content').classList.remove('hideit');
            }, 5000);