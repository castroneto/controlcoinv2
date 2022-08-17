
gcloud auth login 

gcloud config set project dev-castroneto

gcloud iam service-accounts keys create ~/firebase-service-account.json --iam-account firebase-adminsdk-mop6n@dev-castroneto.iam.gserviceaccount.com

export GOOGLE_APPLICATION_CREDENTIALS=~/firebase-service-account.json